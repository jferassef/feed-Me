![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# feed-Me

![logo_app](https://github.com/jferassef/feed-Me/blob/0da66a9333c49bf2024048f7216bc4a9a4b9b369/public/images/logo.jpg)
Description

Hi, welcome to feedMe this is a What´s left on your fridge app, that will keep track of the flow of food in your daily life, meaning the food you enter to your fridge and let you know when you are running out of it. Wait! no just that, you can also generate your own shopping list, or check some cool recipes you can do with the ingredients you have. User will have a profile to create all that previously mentioned and some information about the data its entering.

##Views
Index: Intro of the lab, will present the logo, user will be starting to familiarize with the app, and enter the name.

Intro-Letter: User will have a friendly welcoming and will know what the app is about.

Signup: User will signup in the app if is the first time using it.

Signin: User will login if already have create a profile before.

User-profile: User will see some general data, as a dashboard, with total of items, a sign if its running out of food, the total of money it spends on food, and the links to the other functionalities.

food-list: User will have all the food separated by categories, and will be able to apply the hole CRUD with all the items.

shoplist: user will create its own shoplist, but also will have some suggestions of items that it has but is running out of.

recepies: user can check which recepies can does with the ingredients it has.

ROUTES
table goes here

MODELS
User model:
name: { type: String },
username: {
type: String,
unique: true,
},
password: String,
},
{
timestamps: true,

Food model:
name: { type: String },
category: {
type: String,
enum: ["Meat", "Vegetable", "Fruit", "Sweets", "Drinks", "Other"],
},
expireDate: { type: Date },
quantity: { type: Number },
note: { type: String },
cost: { type: Number },
user: { type: String },
