class AddProfileVariablesToUser < ActiveRecord::Migration
  def change
	add_column :users, :location, :string
	add_column :users, :bio, :text
	add_column :users, :joined, :date
  end
end
