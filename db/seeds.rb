# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Cause.destroy_all
Event.destroy_all

@user = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
puts "#{User.count} users created"

@blm = Cause.create!(name: 'BLM', user: @user)
puts "#{Cause.count} causes created"

@unity_march = Event.create!(name: 'Unity March', reason: 'Support in San Jose', location: 'SAP Center, San Jose', age_group: 18, cause: @blm, user: @user)
puts "#{Event.count} events created"


