import { Model } from "objection";

class ItemComposite extends Model {
  static get tableName() {
    return "item_composites";
  }

  id!: string;
  item_detail_id!: string;
  composite_item_id!: string;
  composite_item_qty!: number;
  composite_item_uom_id!: string;
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
        item_detail_id: { type: "string", format: "uuid" },
        composite_item_id: { type: "string", format: "uuid" },
        composite_item_qty: { type: "number" },
        composite_item_uom_id: { type: "string", format: "uuid" },
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
    itemDetail: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/itemDetail",
      join: {
        from: "item_composites.item_detail_id",
        to: "item_details.id",
      },
    },
    compositeItem: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/item",
      join: {
        from: "item_composites.composite_item_id",
        to: "items.id",
      },
    },
    compositeItemUom: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/uoms",
      join: {
        from: "item_composites.composite_item_uom_id",
        to: "uoms.id",
      },
    },
    organization: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/organization",
      join: {
        from: "item_composites.organization_id",
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

export default ItemComposite;
