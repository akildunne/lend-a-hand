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


@blm = Cause.create!(name: 'Black Lives Matter', image: 'https://images.app.goo.gl/TeKbYG7XPHKnayZa6', user: @blm_user)
@hrc = Cause.create!(name: 'Human Rights Campagin', image: 'https://images.app.goo.gl/2AoSxWruZGTq7UMRA', user: @hrc_user)
@pp = Cause.create!(name: 'Planned Parenthood', image: 'https://images.app.goo.gl/SLVYaP8z1K1cSKmZ7', user: @pp_user)
@et = Cause.create!(name: 'Everytown for Gun Safety', image: 'https://images.app.goo.gl/GFs2NxM4Kar3f3sp6', user: @et_user)
@sc = Cause.create!(name: 'Street Children', image: 'https://images.app.goo.gl/PC4btRebRYJzN4wn9', user: @sc_user)
@crp = Cause.create!(name: 'Climate Reality Project', image: 'https://images.app.goo.gl/NzYTyhRazTfRW1S68', user: @crp_user)


@unity_march = Event.create!(name: 'Unity March', reason: 'Support in San Jose', location: 'SAP Center, San Jose', age_group: '18+', cause: @blm, user: @blm_user)
@phone_bank = Event.create!(name: 'Everytown Phone Bank', reason: 'Inform voters of laws in their state.', location: 'Everytown Office, San Francisco', age_group: '18+', cause: @et, user: @et_user)
@escort = Event.create!(name: 'Planned Parenthood Volunteer Escort', reason: 'Protect people entering and leaving Planned Parenthood.', location: 'Planned Parenthood, Santa Clara', age_group: '18+', cause: @pp, user: @pp_user)
@pride = Event.create!(name: 'San Jose Pride', reason: 'Show your support for love! Come join HRC for a day of dancing, fun and love.', location: 'Downtown San Francisco', age_group: 'all ages', cause: @hrc, user: @hrc_user)
@food_drive = Event.create!(name: 'Street Children Food Drive', reason: 'Help fill backpacks with necessities to pass out to the local community in need.', location: 'Street Children Warehouse, San Jose', age_group: 'all ages', cause: @sc, user: @sc_user)
@climate_talk = Event.create!(name: 'Climate Change Talk', reason: 'Inform voters of what they can do locally to push for real changes in government regarding climate.', location: '5th Avenue Park, Downtown San Jose', age_group: '18+', cause: @crp, user: @crp_user)



