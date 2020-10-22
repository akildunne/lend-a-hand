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

@blm_user = User.create!(username: 'BLM Admin', email: 'blmadmin@email.com', password: '123456')
@hrc_user = User.create!(username: 'HRC Admin', email: 'hrcadmin@email.com', password: '123456')
@pp_user = User.create!(username: 'PP Admin', email: 'ppadmin@email.com', password: '123456')
@et_user = User.create!(username: 'ET Admin', email: 'etadmin@email.com', password: '123456')
@sc_user = User.create!(username: 'SC Admin', email: 'scadmin@email.com', password: '123456')
@crp_user = User.create!(username: 'CRP Admin', email: 'crpadmin@email.com', password: '123456')
puts "#{User.count} users created"

@blm = Cause.create!(name: 'Black Lives Matter', image: 'https://images.app.goo.gl/TeKbYG7XPHKnayZa6', user: @blm_user)
@hrc = Cause.create!(name: 'Human Rights Campagin', image: 'https://images.app.goo.gl/2AoSxWruZGTq7UMRA', user: @hrc_user)
@pp = Cause.create!(name: 'Planned Parenthood', image: 'https://images.app.goo.gl/SLVYaP8z1K1cSKmZ7', user: @pp_user)
@et = Cause.create!(name: 'Everytown for Gun Safety', image: 'https://images.app.goo.gl/GFs2NxM4Kar3f3sp6', user: @et_user)
@sc = Cause.create!(name: 'Street Children', image: 'https://images.app.goo.gl/PC4btRebRYJzN4wn9', user: @sc_user)
@crp = Cause.create!(name: 'Climate Reality Project', image: 'https://images.app.goo.gl/NzYTyhRazTfRW1S68', user: @crp_user)
puts "#{Cause.count} causes created"

@unity_march = Event.create!(name: 'Unity March', reason: 'Support in San Jose', location: 'SAP Center, San Jose', age_group: '18+', cause: @blm, user: @blm_user)
puts "#{Event.count} events created"


