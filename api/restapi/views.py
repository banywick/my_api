from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductAPI(ListAPIView):
    queryset = Product.objects.prefetch_related('category')
    serializer_class = ProductSerializer


class CategoryAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FilterCatAPI(ListAPIView):
    def get(self, request, id):
        queryset = Product.objects.filter(category_id=request.query_params)
        serializer_class = ProductSerializer
