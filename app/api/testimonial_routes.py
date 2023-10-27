from flask import Blueprint, request, jsonify
from app.models import Testimonial, db
from app.forms import TestimonialForm
from app.api.auth_routes import validation_errors_to_error_messages


testimonial_routes = Blueprint('testimonial', __name__)

@testimonial_routes.route('/')
def hello():
    return "Testimonial route"


@testimonial_routes.route('/new', methods=["POST"])
def create_testimonial():
  """
  Create a new testimonial
  """
  form = TestimonialForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    name = form.data['name']
    profile_pic = form.data['profile_pic']
    stars = form.data['stars']
    body = form.data['body']

    testimonial = Testimonial(name=name, stars=stars, body=body, profile_pic=profile_pic)
    db.session.add(testimonial)
    db.session.commit()
    print('Testimonial Saved')
    testimonials = Testimonial.query.order_by(Testimonial.stars.desc()).all()
    return {'testimonials': [testimonial.to_dict() for testimonial in testimonials]}, 201
    # return testimonial.to_dict(), 201

  return {"ErRors ": validation_errors_to_error_messages(form.errors)}, 401
