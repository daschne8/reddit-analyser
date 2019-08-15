class CreateKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :keywords do |t|
      t.float :user_id
      t.float :sentiment
      t.float :sadness
      t.float :joy
      t.float :fear
      t.float :disgust
      t.float :anger
      t.string :name

      t.timestamps
    end
  end
end
