import { Model } from "objection";

class BusinessEntity extends Model {
  static get tableName() {
    return "business_entities";
  }

  id!: string;
  name!: string;
  vat_number!: string;
  address_id!: string | null;
  type_id!: number;
  email_id!: string;
  mobile_no_std_code!: number;
  mobile_no!: string;
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
        name: { type: "string" },
        vat_number: { type: "string" },
        address_id: { type: ["string", "null"], format: "uuid" },
        type_id: { type: "integer" },
        email_id: { type: "string" },
        mobile_no_std_code: { type: "integer" },
        mobile_no: { type: "string" },
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
    address: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/address",
      join: {
        from: "business_entities.address_id",
        to: "address.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "business_entities.organization_id",
        to: "organizations.id",
      },
    },
    businessEntityType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/businessEntityType",
      join: {
        from: "business_entities.type_id",
        to: "master_business_entity_type.id",
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

export default BusinessEntity;
