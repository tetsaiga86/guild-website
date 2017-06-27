# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170627024357) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "achievement_data", force: :cascade do |t|
    t.string   "bnet_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "announcements", force: :cascade do |t|
    t.string   "title"
    t.integer  "order"
    t.text     "body"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "retired",    default: false
  end

  create_table "character_loot_data", force: :cascade do |t|
    t.string   "bnet_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "ilevel"
    t.string   "context"
    t.json     "bonus_list"
  end

  create_table "dkps", force: :cascade do |t|
    t.string   "name"
    t.string   "rank"
    t.integer  "net_dkp"
    t.integer  "total_dkp"
    t.integer  "spent_dkp"
    t.integer  "hours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "members_data", force: :cascade do |t|
    t.string   "bnet_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json     "body_json"
    t.integer  "dkp_id"
    t.index ["dkp_id"], name: "index_members_data_on_dkp_id", using: :btree
  end

  create_table "raid_logs", force: :cascade do |t|
    t.string   "w_log_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recruit_applications", force: :cascade do |t|
    t.string   "name_server"
    t.string   "battletag"
    t.string   "class_spec"
    t.string   "armoryUrl"
    t.string   "email"
    t.boolean  "q1"
    t.boolean  "q2"
    t.boolean  "q3"
    t.text     "q4"
    t.text     "q5"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "wow_classes", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wow_specs", force: :cascade do |t|
    t.string   "name"
    t.integer  "wow_class_id"
    t.boolean  "active"
    t.integer  "order"
    t.string   "img_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["wow_class_id"], name: "index_wow_specs_on_wow_class_id", using: :btree
  end

  add_foreign_key "members_data", "dkps"
  add_foreign_key "wow_specs", "wow_classes"
end
