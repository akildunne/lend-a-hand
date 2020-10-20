class CausesController < ApplicationController
  before_action :set_cause, only: [:show, :update, :destroy]

  # GET /causes
  def index
    @causes = Cause.all

    render json: @causes
  end

  # # GET /causes/1
  # def show
  #   render json: @cause
  # end

  # POST /causes
  def create
    @cause = Cause.new(cause_params)

    if @cause.save
      render json: @cause, status: :created, location: @cause
    else
      render json: @cause.errors, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /causes/1
  # def update
  #   if @cause.update(cause_params)
  #     render json: @cause
  #   else
  #     render json: @cause.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /causes/1
  # def destroy
  #   @cause.destroy
  # end

  # private
  #   # Use callbacks to share common setup or constraints between actions.
  #   def set_cause
  #     @cause = Cause.find(params[:id])
  #   end

  #   # Only allow a trusted parameter "white list" through.
  #   def cause_params
  #     params.require(:cause).permit(:name)
  #   end
end
