// tracing.ts
import process from "process";
import * as opentelemetry from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";

const exporterOptions: { url: string } = {
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "http://216.48.182.148:4317",
};

const traceExporter = new OTLPTraceExporter(exporterOptions);
export const signoz = new opentelemetry.NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "pos_backend",
  }),
});

// Gracefully shut down the SDK on process exit
process.on("SIGTERM", () => {
  signoz
    .shutdown()
    .then(() => console.log("Tracing terminated"))
    .catch((error: any) => console.log("Error terminating tracing", error))
    .finally(() => process.exit(0));
});
