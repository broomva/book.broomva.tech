# Week 4


# Hyperparameter Tuning

# Ensembling


## Validation in presence of time component

***f) KFold scheme in time series***

In time-series task we usually have a fixed period of time we are asked to predict. Like day, week, month or arbitrary period with duration of **T**.

1. Split the train data into chunks of duration **T**. Select first **M** chunks.
2. Fit N diverse models on those **M** chunks and predict for the chunk **M+1**. Then fit those models on first **M+1** chunks and predict for chunk **M+2** and so on, until you hit the end. After that use all train data to fit models and get predictions for test. Now we will have *meta-features* for the chunks starting from number **M+1** as well as *meta-features* for the test.
3. Now we can use *meta-features* from first **K** chunks [**M+1**,**M+2**,..,**M+K**] to fit level 2 models and validate them on chunk **M+K+1**. Essentially we are back to step 1. with the lesser amount of chunks and *meta-features* instead of features.

***g) KFold scheme in time series with limited amount of data***

We may often encounter a situation, where scheme **f)** is not applicable, especially with limited amount of data. For example, when we have only years 2014, 2015, 2016 in train and we need to predict for a whole year 2017 in test. In such cases scheme **c)** could be of help, but with one constraint: KFold split should be done with the respect to the time component. For example, in case of data with several years we would treat each year as a fold.

# Example Notebooks

[Hyperparameters_tuning_video2_RF_n_estimators.ipynb](week_4/hyperparameters_tuning_video2_rf_n_estimators.ipynb)

[Macros.ipynb](week_4/macros.ipynb)

[compute_KNN_features.ipynb](week_4/compute_knn_features.ipynb)

# Additional Material

- [Tuning the hyper-parameters of an estimator (sklearn)](http://scikit-learn.org/stable/modules/grid_search.html)
- [Optimizing hyperparameters with hyperopt](http://fastml.com/optimizing-hyperparams-with-hyperopt/)
- [Complete Guide to Parameter Tuning in Gradient Boosting (GBM) in Python](https://www.analyticsvidhya.com/blog/2016/02/complete-guide-parameter-tuning-gradient-boosting-gbm-python/)

[Far0n's framework for Kaggle competitions "kaggletils"](https://github.com/far0n/kaggletils)

[28 Jupyter Notebook tips, tricks and shortcuts](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)

## Matrix Factorization:

- [Overview of Matrix Decomposition methods (sklearn)](http://scikit-learn.org/stable/modules/decomposition.html)

## t-SNE:

- [Multicore t-SNE implementation](https://github.com/dmitryulyanov/multicore-tsne)
- [Comparison of Manifold Learning methods (sklearn)](http://scikit-learn.org/stable/auto_examples/manifold/plot_compare_methods.html)
- [How to Use t-SNE Effectively (distill.pub blog)](https://distill.pub/2016/misread-tsne/)
- [tSNE homepage (Laurens van der Maaten)](https://lvdmaaten.github.io/tsne/)
- [Example: tSNE with different perplexities (sklearn)](http://scikit-learn.org/stable/auto_examples/manifold/plot_t_sne_perplexity.html#sphx-glr-auto-examples-manifold-plot-t-sne-perplexity-py)

## Interactions:

- [Facebook Research's paper about extracting categorical features from trees](https://research.fb.com/publications/practical-lessons-from-predicting-clicks-on-ads-at-facebook/)
- [Example: Feature transformations with ensembles of trees (sklearn)](http://scikit-learn.org/stable/auto_examples/ensemble/plot_feature_transformation.html)

- [Kaggle ensembling guide at MLWave.com (overview of approaches)](https://mlwave.com/kaggle-ensembling-guide/)
- [StackNet — a computational, scalable and analytical meta modelling framework (by KazAnova)](https://github.com/kaz-anova/stacknet)
- [Heamy — a set of useful tools for competitive data science (including ensembling)](https://github.com/rushter/heamy)