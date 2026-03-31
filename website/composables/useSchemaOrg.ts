export const useLocalBusinessSchema = () => {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          name: 'Kanzlei Schnoor – Rechtsanwalt Philipp Schnoor',
          description: 'Rechtsanwalt und Strafverteidiger in Hamburg. Spezialisiert auf Mietrecht, Strafrecht und Verkehrsrecht.',
          url: 'https://schnoor-rechtsanwalt.de',
          telephone: '+4915730871236',
          email: 'info@schnoorrechtsanwalt.de',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Papenreye 61',
            addressLocality: 'Hamburg',
            postalCode: '22453',
            addressCountry: 'DE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 53.5511,
            longitude: 9.9937,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          priceRange: '€€',
          image: 'https://schnoor-rechtsanwalt.de/og-image.jpg',
          areaServed: {
            '@type': 'City',
            name: 'Hamburg',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '33',
            bestRating: '5',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Rechtsgebiete',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mietrecht' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strafrecht & Strafverteidigung' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Verkehrsrecht' } },
            ],
          },
        }),
      },
    ],
  })
}
