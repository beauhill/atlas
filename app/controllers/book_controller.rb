class BookController < ApplicationController

	respond_to :html,:js
	
	def index
		@users = User.all
	end

	def user_next
		  @selected = User.find_by(:school_id => params[:uid])	
		  @select = User.first	
		respond_to do |format|
   format.html { render :partial => 'navbar' }
   format.js 

end
	end
	
end
