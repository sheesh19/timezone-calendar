class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
