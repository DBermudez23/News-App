import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = 'a47d91fa-fc1e-4af6-9f67-a9388bbb6925'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1'
    }),
    endpoints: (builder) => ({
        getTrendingNews: builder.query({    
            query: () => `minuteStreamArticles?apiKey=${API_KEY}&lang=eng&isDuplicate=false`
        }),
        refetchOnMountOrArgChange: true,
        getCategoryNews: builder.query({
            query: ( categoryUri ) => `/article/getArticlesForTopicPage?uri=${categoryUri}&apiKey=${API_KEY}&articlesSortBy=fq&eventsSortBy=rel`
        }),
        refetchOnMountOrArgChange: true,
        getArticleDetails: builder.query({
            query: (articleUri) => `/article/getArticle?articleUri=${articleUri}&apiKey=${API_KEY}&lang=eng`
        }),
        refetchOnMountOrArgChange: true,
        getSuggestedConcept: builder.query({
            query: (prefix) => `/suggestConceptsFast?prefix=${prefix}&apiKey=${API_KEY}&lang=eng`
        })
    }),
});


export const { useGetTrendingNewsQuery, useGetCategoryNewsQuery, useGetArticleDetailsQuery, useGetSuggestedConceptQuery  } = apiSlice;