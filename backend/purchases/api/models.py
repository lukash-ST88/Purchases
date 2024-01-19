from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)


class Purchase(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='purchases')


