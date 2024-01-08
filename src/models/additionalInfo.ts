import { Model } from "objection";

class AdditionalInfo extends Model {
  static get tableName() {
    return "additional_infos";
  }

  id!: string;
  name!: string;
  labels!: string[];
  is_display_on_catalog!: boolean;
  additional_info_type_id!: number;
  organization_id!: string;
  client_id!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  is_deleted!: boolean;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "text" },
        labels: { type: "array", items: { type: "string" } },
        is_display_on_catalog: { type: "boolean" },
        additional_info_type_id: { type: "integer" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
        is_deleted: { type: "boolean" },
        created_by: { type: "string", format: "uuid" },
        updated_by: { type: "string", format: "uuid" },
      },
    };
  }

  static relationMappings = {
    additionalInfoType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/master_additional_info_types",
      join: {
        from: "additional_infos.additional_info_type_id",
        to: "master_additional_info_types.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "additional_infos.organization_id",
        to: "organizations.id",
      },
    },
  };

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

export default AdditionalInfo;
