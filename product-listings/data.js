export default {
  menu: {
    "New Today": {
      path: "/"
    },
    "Ends Soon": {
      path: "/ends-soon"
    },
    "Shop by Category": {
      path: "/category",
      menu: {
        "Back to School": {
          path: "/jump/backtoschool"
        },
        "College & Dorm": {
          path: "/jump/collegedorm"
        },
        Kids: {
          path: "/category/kids"
        },
        Girls: {
          path: "/category/girls"
        },
        Boys: {
          path: "/category/boys"
        },
        Women: {
          path: "/category/women"
        },
        "Women - Plus": {
          path: "/category/womens-plus"
        },
        Men: {
          path: "/category/men"
        },
        Shoes: {
          path: "/category/shoes"
        },
        "Beauty & Wellness": {
          path: "/category/health-and-beauty"
        },
        "Baby & Maternity": {
          path: "/category/baby-maternity"
        },
        "Toys & Playtime": {
          path: "/category/toys-playtime"
        },
        Home: {
          path: "/category/home"
        },
        "Personalized & DIY": {
          path: "/category/personalized-products"
        },
        "#Trending": {
          path: "/category/trending"
        },
        "Debut Brands": {
          path: "/category/debuts"
        },
        "Ready to Ship": {
          path: "/readyship"
        },
        "Smart-pay Shop": {
          path: "/smart-pay-shop"
        }
      }
    },
    "Shop by Size": {
      path: "/shop-by-size",
      menu: {
        Girls: {
          path: "",
          menu: {
            "0-24M": {
              path: "/shop-by-size/girls/infant-0-24-months"
            },
            "2T-4T": {
              path: "/shop-by-size/girls/toddler-2-4-years"
            },
            "4-6": {
              path: "/shop-by-size/girls/kids-4-6-years"
            },
            "7-12": {
              path: "/shop-by-size/girls/big-kids-7-12-years"
            },
            "14-16": {
              path: "/shop-by-size/girls/big-kids-14-16-years"
            },
            shoes: {
              path: "/shop-by-size/girls/shoes"
            }
          }
        },
        Boys: {
          path: "",
          menu: {
            "0-24M": {
              path: "/shop-by-size/boys/infant-0-24-months"
            },
            "2T-4T": {
              path: "/shop-by-size/boys/toddler-2-4-years"
            },
            "4-7": {
              path: "/shop-by-size/boys/kids-4-7-years"
            },
            "8-12": {
              path: "/shop-by-size/boys/big-kids-8-12-years"
            },
            "14-20": {
              path: "/shop-by-size/big-kids-14-20-years"
            },
            shoes: {
              path: "/shop-by-size/boys/shoes"
            }
          }
        },
        Women: {
          path: "",
          menu: {
            Accessories: {
              path: "/shop-by-size/women/accessories"
            },
            "Plus-Size": {
              path: "/shop-by-size/women/plus"
            },
            "Maternity & Nursing": {
              path: "/shop-by-size/women/maternity"
            },
            Shoes: {
              path: "/shop-by-size/women/shoes"
            },
            Women: {
              path: "/shop-by-size/women"
            }
          }
        }
      }
    },
    "My Account": {
      path: "",
      menu: {
        Orders: {
          path: "/account/orders"
        },
        "Invites & Credits": {
          path: "/invite/refer"
        },
        "Email Preferences": {
          path: "/account/newsletter"
        },
        "Account Info": {
          path: "/account/edit"
        },
        "zulily credit card": {
          path: "/account/zucard"
        },
        "My Waitlist": {
          path: "/waitlist"
        },
        "My Favorites": {
          path: "/account/favorites"
        },
        Vouchers: {
          path: "/account/vouchers"
        },
        "Sign Out": {
          path: "/auth/logout"
        }
      }
    }
  }
};
