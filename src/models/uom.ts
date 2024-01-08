import { Model } from "objection";

class Uom extends Model {
  static get tableName() {
    return "uoms";
  }

  id!: string;
  name!: string;
  uom_category_id!: string;
  uom_category_type_id!: number;
  ratio?: number;
  organization_id?: string;
  client_id?: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;
  created_by!: string;
  updated_by!: string;

  static get jsonSchema() {
    return {
      type: "object",
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "text" },
        uom_category_id: { type: "string", format: "uuid" },
        uom_category_type_id: { type: "integer" },
        ratio: { type: "number" },
        organization_id: { type: "string", format: "uuid" },
        client_id: { type: "string" },
        is_active: { type: "boolean" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" },
      },
    };
  }

  static relationMappings = {
    uomCategory: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uomCateogry",
      join: {
        from: "uoms.uom_category_id",
        to: "uom_categories.id",
      },
    },
    uomType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uomType",
      join: {
        from: "uoms.uom_category_type_id",
        to: "master_uom_types.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "uoms.organization_id",
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

export default Uom;
