from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=50)
    price = models.IntegerField()
    imgSrc = models.ImageField(upload_to='', verbose_name='Image')
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title
