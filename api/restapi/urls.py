from django.urls import path

from .views import ProductFilterAPI, CategoryAPI,ProductListAPI

urlpatterns = [
    path('products/', ProductListAPI.as_view(), name='product'),
    path('product_filter/<int:id>', ProductFilterAPI.as_view()),
    path('category/', CategoryAPI.as_view())

]
