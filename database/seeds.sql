INSERT INTO users (email, password, createdAt, UpdatedAt) VALUES ("Paul@Kirkpatrick.com", "password", '2020-12-31 09:43:13', '2020-12-31 09:43:13');
INSERT INTO users (email, password, createdAt, UpdatedAt) VALUES ("Kelsey@Eckelberry.com", "password", '2020-12-31 09:43:13', '2020-12-31 09:43:13');
INSERT INTO users (email, password, createdAt, UpdatedAt) VALUES ("Seth@Glenn.com", "password", '2020-12-31 09:43:13', '2020-12-31 09:43:13');
INSERT INTO users (email, password, createdAt, UpdatedAt) VALUES ("Anthony@Gamon.com", "password", '2020-12-31 09:43:13', '2020-12-31 09:43:13');

INSERT INTO crimes (UserId, title, body, latitude, longitude, createdAt, UpdatedAt) 
	VALUES (3, 'Suspicious Coin Found', 'Turns out it was only a quarter.', 39.110700, -94.523483, '2021-01-02 09:39:13', '2021-01-02 09:39:13')
	, (1, 'Oatmeal Thief Hits Downtown', 'I was making my oatmeal this morning and BAM! it was just gone!', 39.099930, -94.582493, '2021-01-02 09:43:13', '2021-01-02 09:43:13')
	, (4, 'Missing Piggy?', 'I found a little piggy with a collar that reads "Piggy Smalls". No address listed.', 39.056754, -94.697977, '2021-01-02 18:39:12', '2021-01-02 18:39:12')
	, (4, 'Sidewalks Vandalized with Hopscotch Markings', 'I came outside this morning to see the entire sidewalk just completely ruined. There were these creepy arcane markings all over them!', 39.009472, -94.446524, '2021-01-03 10:43:13', '2021-01-03 10:43:13')
	, (2, 'House Fire on Empty Lot', 'It was so weird seeing a house fire on a lot without any houses on it.', 38.980191873, -94.689451552, '2021-01-03 15:44:13', '2021-01-03 15:44:13')
	, (1, 'Missing Bacon', 'Someone Has stolen the bacon out of my refrigerator!', 38.987538, -94.600184, '2021-01-04 10:39:12', '2021-01-04 10:39:12')
	, (1, 'Pilot Flew the Coup!', "My deadbeat husband just up and goes to work while I'm stuck at home tending to our cat!", 39.115905, -94.242901, '2021-01-04 13:39:12', '2021-01-04 13:39:12')
	, (3, 'Shoes Spray Painted on Side of House', 'Someone was painting shoes on houses and these shoes are huge.', 39.166900, -94.589001, '2021-01-05 08:43:13', '2021-01-05 08:43:13')
	, (2, 'Squirrel Attacks BBQ!', 'Please keep an eye out for the squirls in the neighborhood, I was attacked at our bbq last night by one. He stole my hamburger and chips.', 38.890362, -94.811877, '2021-01-05 11:43:13', '2021-01-05 11:43:13')
	, (3, 'Vending Machine Stocked with Expired Food', 'Police are investigating a vending machine that had an expired bag of Funyuns.', 38.9124, -94.388275, '2021-01-05 16:43:13', '2021-01-05 16:43:13');