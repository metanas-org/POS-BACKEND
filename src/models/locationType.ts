import { Model } from "objection";

class LocationType extends Model {
  static get tableName() {
    return "master_location_types";
  }

  id!: number;
  name!: string;
  is_active!: boolean;
  created_at!: string;
  updated_at!: string;

  static relationMappings = {
    location: {
      relation: Model.HasManyRelation,
      modelClass: __dirname + "/location",
      join: {
        from: "master_location_types.id",
        to: "locations.location_type_id",
      },
    },
  };

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],
      properties: {
        id: { type: "integer" },
        name: { type: "string", nullable: false, minLength: 1 },
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

export default LocationType;
