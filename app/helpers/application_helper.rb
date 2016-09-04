module ApplicationHelper

	def profile(user)
		@user.avatar.url(:thumb)
	end


	def logo_image
		'http://www.team1671.com/wp-content/uploads/2016/01/birdlogo-1-1024x232.png'
	end

	def programming_image
		'http://localhost:3000/images/programming-photo.jpg'
	end


	def calculate_image(user)

		if user.first_name == "Beau"
		programming_image
		else ''
		end

	end



end
