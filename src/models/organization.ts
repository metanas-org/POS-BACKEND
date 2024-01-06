import { Model } from "objection";

class Organization extends Model {
  static get tableName() {
    return "organizations";
  }

  id!: string;
  name!: string;
  vat_number?: string;
  business_type_id!: string;
  business_email_id?: string;
  business_size_id!: string;
  address_id?: string;
  logo_asset_id?: string;
  contact_person_id?: string;
  is_loyalty_offered?: boolean;
  loyalty_banner_asset_id?: string;
  loyalty_credit_redeeming_value?: number;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    businessType: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/businessType",
      join: {
        from: "organizations.business_type_id",
        to: "master_business_types.id",
      },
    },
    businessSize: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/businessSize",
      join: {
        from: "organizations.business_size_id",
        to: "master_business_sizes.id",
      },
    },
    address: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/address",
      join: {
        from: "organizations.address_id",
        to: "address.id",
      },
    },

    logoAsset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "organizations.logo_asset_id",
        to: "assets.id",
      },
    },
    loyaltyBannerAsset: {
      relation: Model.BelongsToOneRelation,
      modelClass: __dirname + "/asset",
      join: {
        from: "organizations.loyalty_banner_asset_id",
        to: "assets.id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "string", format: "uuid" },
        name: { type: "string", nullable: false, minLength: 1 },
        vat_number: { type: "string" },
        business_type_id: { type: "integer" },
        business_email_id: { type: "string" },
        business_size_id: { type: "integer" },
        contact_person_id: { type: "string" },
        is_loyalty_offered: { type: "boolean" },
        loyalty_credit_redeeming_value: { type: "number" }, //double
        address_id: { type: "string", format: "uuid" },
        logo_asset_id: { type: "string", format: "uuid" },
        is_deleted: { type: "boolean" },
        is_active: { type: "boolean" },
        created_at: {
          type: "string",
          format: "date-time",
        },
        updated_at: {
          type: "string",
          format: "date-time",
        },
      },
    };
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = this.created_at;
  }

  $beforeUpdate() {
    // Update the updated_at timestamp
    this.updated_at = new Date().toISOString();
  }
}

export default Organization;
