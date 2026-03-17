export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const placeId = config.googlePlaceId
  const apiKey = config.googleApiKey

  // Return null if not configured — component falls back to static reviews
  if (!placeId || !apiKey) {
    return null
  }

  try {
    // Uses the new Places API (v1) — requires "Places API (New)" enabled in GCP
    const url = `https://places.googleapis.com/v1/places/${placeId}`
    const data: any = await $fetch(url, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews.rating,reviews.text,reviews.originalText,reviews.authorAttribution,reviews.relativePublishTimeDescription',
      },
      query: { languageCode: 'de' },
    })

    if (!data) {
      console.warn('[reviews] Google Places API returned empty response')
      return null
    }

    return {
      rating: data.rating ?? 4.9,
      totalReviews: data.userRatingCount ?? 0,
      reviews: (data.reviews ?? [])
        .filter((r: any) => r.rating === 5)
        .slice(0, 10)
        .map((r: any) => ({
          name: r.authorAttribution?.displayName ?? 'Anonym',
          photo: r.authorAttribution?.photoUri ?? '',
          text: r.originalText?.text || r.text?.text || '',
          rating: r.rating,
          time: r.relativePublishTimeDescription ?? '',
        })),
    }
  } catch (err) {
    console.warn('[reviews] Failed to fetch Google reviews:', err)
    return null
  }
})
