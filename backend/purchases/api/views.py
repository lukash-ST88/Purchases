from django.shortcuts import render
from rest_framework import generics
from .models import Purchase, Category
from .serializers import PurchaseSerializer, CategorySerializer


class PurchaseListCreateView(generics.ListCreateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer


class PurchaseSortedListView(generics.ListAPIView):
    serializer_class = PurchaseSerializer

    def get_queryset(self):
        return Purchase.objects.all().order_by(self.kwargs['sort'])


class PurchaseFilteredListView(generics.ListAPIView):
    serializer_class = PurchaseSerializer

    def get_queryset(self):
        return Purchase.objects.filter(category_id=self.kwargs['pk'])


class PurchaseRetrieveUpdateDestroy(generics.RetrieveUpdateAPIView):
    queryset = Purchase.objects.all()
    serializer_class = PurchaseSerializer


class CategoryCreate(generics.CreateAPIView):
    queryset = Category.objects.all()
