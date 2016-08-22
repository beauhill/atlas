class AddImageToUser < ActiveRecord::Migration
  def change
  	  add_attachment :users, :avatar
  	  add_column :users, :school_id, :string
  	  add_column :users, :full_name, :string
  	  add_column :users, :group, :string
  end
end
