import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = '4a623338-f082-42a8-8e30-6a2da35629ef'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://eventregistry.org/api/v1'
    }),
    endpoints: (builder) => ({
        getTrendingNews: builder.query({
            query: () => `minuteStreamArticles?apiKey=${API_KEY}`
        }),
        refetchOnMountOrArgChange: true,
        searchArticle: builder.query({
            query: ({ category = '', page = 1 }) => ({
                url: `article/getArticles`,
                method: 'POST',
                body: {
                    query: {
                    $query: {
                        $and: [
                        {
                            $or: [
                            {
                                categoryUri: `dmoz/${category}`
                            }
                            ]
                        },
                        {
                            locationUri: "http://en.wikipedia.org/wiki/India"
                        }
                        ]
                    },
                    $filter: {
                        forceMaxDataTimeWindow: "31"
                    }
                    },
                    resultType: "articles",
                    articlesSortBy: "date",
                    articlesPage: page,
                    articlesCount: 50,
                    apiKey: API_KEY
                }
                })
            }),
            }),
        }); 


export const { useGetTrendingNewsQuery, useSearchArticleQuery } = apiSlice;