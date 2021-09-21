class CreateTimeslots < ActiveRecord::Migration[6.1]
  def change
    create_table :timeslots do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :name

      t.timestamps
    end
  end
end
