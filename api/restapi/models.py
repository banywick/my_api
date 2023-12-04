from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)


class Category(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title
