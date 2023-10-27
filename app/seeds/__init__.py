from flask.cli import AppGroup
from app.models.db import db, environment, SCHEMA
from .admin import seed_admin, unseed_admin
from .topic import seed_topics, unseed_topics
from .blog import seed_blog, unseed_blog
from .testimonial import seed_testimonials, unseed_testimonials

seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        unseed_blog()
        unseed_topics()
        unseed_admin()
        unseed_topics()
        unseed_testimonials()
    seed_admin()
    seed_topics()
    seed_blog()
    seed_testimonials()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    unseed_admin()
    unseed_blog()
    unseed_topics()
    unseed_testimonials()
