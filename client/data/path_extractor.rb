require 'json'

class PathExtractor
  def initialize(file_path, target)
    @json = JSON.parse File.read(file_path)
    @found = false
    @path = []
    @target = target
    @iterations = 100000000
  end

  attr_accessor :path

  def extract(space)
    @iterations -= 1
    return unless @iterations > 0
    space = @json if space.nil?
    puts "#{@path.join(' ')}"
    return if @found
    if space.class.name == 'Array'
      space.each_index do |idx|
        item = space[idx]

        return if @found
        @path.push idx
        extract(item)
        if @found
          return
        else
          @path.pop
        end
      end
    end

    if space.class.name == 'Hash'
     if space['name'] == @target
      @found = true
     end

     return if @found

     space.keys.each do |key|
       value = space[key]
       return if @found
       @path.push key

       extract(value)

       if @found
         return
       else
         @path.pop
       end
     end
    end
  end
end

pe = PathExtractor.new('allCharacterAchievements.json', 'Legion Raid')
pe.extract(nil)
puts "found at: #{pe.path}"
