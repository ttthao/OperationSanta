# Alpha Phi Omega Operation Santa #
by Tommy Truong, AX

## Last Changes:

#### Wednesday, 09/28/2016
Scrapped 1st design. Home layout drafted, need to go over with Joyce.
Bootstrap docs sidebar will be added to the right.
Smooth scroll will be everywhere.
Adoption/nomination/donation will be embedded.
Hosted on Heroku at https://operationsanta.herokuapp.com/en/

#### Monday, 09/12/2016
Base template created. About Us and FAQ are static, not much needed for templating.
Special Thanks can have an alternating dynamic design, where each new entry have
text and photos alternating.

Media will be complicated, it needs to displays graphics and audio in a dynamic presentation. Review CMRG's tutorials design.

Testimonials should prompt the user if they received aid from us and make it easy
to submit their own testimonials. Testimonials should have a check that cross-references
the user database and check if they are previous/current aid receivers. Review
Django's form system.

Contact us should be able to send the message to the opsanta gmail. Whether it should
be stored on the site's database is yet to be determined.

Nomination's model/schema has been created, review your notes. The crucial aspect
of nomination is in the admin page. It must display the info easily and be searchable.
Reference Django's admin customization tutorial.

Adoption model/schema should be close to nominations.

Donation's non-monetary form is simple. The monetary paypal widget should be copy-pasted,
if not redo it. The mailing info should stay.

Overall, the home page should display more graphics from previous years. Maybe a
carousel of pictures, along with an aesthetic jumbotron will be enough. The homepage
should explain operation santa concisely, maybe a 3 column approach will work best.

Work locally and create the structure of the homepage first.
