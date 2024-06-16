#!/usr/bin/python3
# Data dumping
from models.amenity import Amenity
from models.user import User
from models.state import State
from models.city import City
from models.place import Place

# amenities = [
#     '24-hour check-in',
#     'Air conditioning',
#     'Breakfast',
#     'Buzzer/wireless intercom',
#     'Cable TV',
#     'Carbon monoxide detector',
#     'Cat(s)',
#     'Dog(s)',
#     'Doorman',
# ]

# # Add Amenities
# for x in amenities:
#     amenity = Amenity(name=x)
#     amenity.save()

# users = [
#     {'email': 'digho@gmail.com', 'password': 'digho', 'first_name': 'Digho', 'last_name': 'Jordan'},
#     {'email': 'samajeste@gmail.com', 'password': 'samajeste', 'first_name': 'Digho', 'last_name': 'Samajeste'}
# ]

# for x in users:
#     user = User(email=x['email'], password=x['password'], first_name=x['first_name'], last_name=x['last_name'])
#     user.save()

# state_cities = {
#     "Alabama": ['Akron', 'Douglas', 'San Francisco'],
#     "Arizona": ['Denver', 'Miami', 'Honolulu'],
#     "Colorado": ['Chicago', 'New Orleans', 'Saint Paul'],
#     "Florida": ['Jackson', 'Portland', 'Babbie'],
#     "Georgia": ['Kearny', 'San Jose', 'Orlando'],
#     "Hawaii": ['Kailua', 'Peoria', 'Baton rouge'],
#     "Illinois": ['Tupelo', 'Eugene', 'Calera'],
#     "Indiana": ['Tempe', 'Fremont', 'Pearl city'],
#     "Loiusiana": ['Naperville', 'Lafayette', 'Meridian'],
#     "Mennesota": ['Fairfield', 'Napa', 'Urbana'],
#     "Mississippi": ['Sonoma'],
#     "Oregon": ['Joliet'],
# }

# for st, cts in state_cities.items():
#     state = State(name=st)
#     state.save()
#     for ct in cts:
#         city = City(name=ct, state_id=state.id)
#         city.save()

# places = [
#     {'user_id': '253e84a2-a724-4be5-b92e-750fca99f1a6', 'city_id': '2daded8f-bcce-4d7f-b320-dd8dcdb44022', 'name': 'Beautiful Studio in Waikiki', 'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'},
#     {'user_id': '253e84a2-a724-4be5-b92e-750fca99f1a6', 'city_id': '2daded8f-bcce-4d7f-b320-dd8dcdb44022', 'name': 'Private Studio - Waikiki', 'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, '},
#     {'user_id': 'b34e0ad1-38cc-412a-b295-e050a09d0d71', 'city_id': '87c9a067-9e07-426b-83eb-873c3aef14a1', 'name': 'Shandong Vocational Dormitory', 'description': 'The European languages are members of the same family. Their separate existence is a myth.'},
# ]

# for x in places:
#     place = Place(user_id=x['user_id'], city_id=x['city_id'], name=x['name'], description=x['description'])
#     place.save()
