class RegistrationsController < Devise::RegistrationsController

  def show
  end



  private

  def sign_up_params
    params.require(:user).permit(:avatar,:school_id, :first_name, :last_name , :email, :user_name, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:avatar,:school_id, :first_name, :last_name , :email, :user_name, :password, :password_confirmation, :current_password)
  end



end  