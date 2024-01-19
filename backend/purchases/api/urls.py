from django.urls import path, include
from .views import PurchaseListView, PurchaseCreateView, PurchaseSortedListView, \
    PurchaseFilteredListView, PurchaseRetrieveUpdateDestroyView, CategoryCreateView, CategoryListView

urlpatterns = [
    path('', PurchaseListView.as_view(), name="purchases"),
    path('add/', PurchaseCreateView.as_view(), name="add-purchase"),
    path('<int:pk>/', PurchaseRetrieveUpdateDestroyView.as_view(), name="purchase"),
    path('sorted/<str:sort>/', PurchaseSortedListView.as_view(), name="sorted-purchases"),
    path('category/<int:pk>/', PurchaseFilteredListView.as_view(), name="filtered-purchases"),
    path('add-category/', CategoryCreateView.as_view(), name="add-category"),
    path('categories/', CategoryListView.as_view(), name="categories")
]
