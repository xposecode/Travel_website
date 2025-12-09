from mongoengine import Document, fields

class Destination(Document):
    name = fields.StringField(required=True)
    country = fields.StringField()
    description = fields.StringField()
    best_time_to_visit = fields.ListField(fields.StringField())
    image_url = fields.URLField()
    activities = fields.ListField(fields.StringField())
    meta = {
        'collection': 'destinations'
    }

class TourPackage(Document):
    destination = fields.ReferenceField(Destination)
    title = fields.StringField()
    duration_days = fields.IntField()
    price = fields.FloatField()
    inclusions = fields.ListField(fields.StringField())