module Admin
  class AnnouncementsController < AdminController
    skip_before_filter :verify_authenticity_token
    before_action :set_announcement, only: [:show, :edit, :update, :destroy]

    # GET /announcements
    # GET /announcements.json
    def index
      render json: Announcement.all
    end

    # GET /announcements/1
    # GET /announcements/1.json
    def show
    end

    # GET /announcements/new
    def new
      @announcement = Announcement.new
    end

    # GET /announcements/1/edit
    def edit
    end

    # POST /announcements
    # POST /announcements.json
    def create
      @announcement = Announcement.new(announcement_params)
      if @announcement.save
        render json: Announcement.order(:order), status: :created
      else
        render json: @announcement.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /announcements/1
    # PATCH/PUT /announcements/1.json
    # def update
    #   respond_to do |format|
    #     if @announcement.update(announcement_params)
    #       format.html { redirect_to @announcement, notice: 'Announcement was successfully updated.' }
    #       format.json { render json: @announcement, status: :ok }
    #     else
    #       format.html { render :edit }
    #       format.json { render json: @announcement.errors, status: :unprocessable_entity }
    #     end
    #   end
    # end

    # DELETE /announcements/1
    # DELETE /announcements/1.json
    def destroy
      @announcement.destroy
      Announcement.order(:order).to_a.each_with_index do |announcement, idx|
        announcement.update(order: idx + 1)
      end

      render json: Announcement.order(:order), status: :ok
    end

    def update_many
      params.require(:announcements).each do |_key, announcement|
        Announcement
          .find(announcement['id'])
          .update(
            announcement.permit(:title, :order, :body, :retired)
          )
      end
      render json: Announcement.order(:order), status: :ok
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_announcement
        @announcement = Announcement.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def announcement_params
        params.require(:announcement).permit(:title, :order, :body, :retired)
      end
  end
end
