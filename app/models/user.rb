class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  

  after_initialize :init

  def init
    self.title = "Team 1671 Member"
    self.joined = Date.today.year
  end


  has_attached_file :avatar, styles: { :medium => "640x" }
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes



   validates :school_id, presence: true, length: { minimum: 4, maximum: 16 }, uniqueness: true  
   validates :first_name, presence: true, length: { minimum: 3, maximum: 30 }
   validates :last_name, presence: true, length: { minimum: 3, maximum: 30 }


end
