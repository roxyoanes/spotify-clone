interface IImage {
  height: number;
  url: string;
  width: number;
}

export interface IAlbum {
  album_type: "single" | "album" | "compilation";
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  type: string;
  uri: string;
}

export interface IPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  href: string;
  id: string;
  images: IImage[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string | null;
      total: number;
    };
    href: string;
    id: string;
    images: IImage[];
    type: string;
    uri: string;
  };
  public: boolean | null;
  snapshot_id: string;
  tracks: [
    {
      added_at: number;
      added_by: {
        display_name: string;
        external_urls: {
          spotify: string;
        };
        followers: {
          href: string | null;
          total: number;
        };
        href: string;
        id: string;
        images: IImage[];
        type: string;
        uri: string;
      } | null;
      is_local: boolean;
      track: {
        album: {
          album_group: string;
          album_type: string;
          artists: [
            {
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              type: string;
              uri: string;
            }
          ];
          available_markets: string[];
          disc_number: number;
          duration_ms: number;
          explicit: boolean;
          external_ids: {
            spotify: string;
          };
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          is_playable: boolean;
          linked_from: {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
          };
          resctrictions: {
            key: string;
          };
          name: string;
          popularity: number;
          preview_url: string | null;
          track_number: number;
          type: string;
          uri: string;
          is_local: boolean;
        };
      };
    }
  ];
  type: string;
  uri: string;
}

export interface IProfileData {
  country: string;
  display_name: string;
  email: string;
  external_urls: { spotify: string };
  followers: { href: null; total: number };
  href: string;
  id: string;
  images: IImage[];
  product: string;
  type: string;
  uri: string;
}

export interface IUserPlaylists {
  href: string;
  items: [
    {
      collaborative: false;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: IImage[];
      name: string;
      owner: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      public: true;
      snapshot_id: string;
      tracks: {
        href: string;
        total: 30;
      };
      type: string;
      uri: string;
    },
    {
      collaborative: false;
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: [];
      name: string;
      owner: {
        external_urls: { spotify: string };
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      public: true;
      snapshot_id: string;
      tracks: {
        href: string;
        total: number;
      };
      type: string;
      uri: string;
    }
  ];
  limit: number;
  next: null;
  offset: number;
  previous: null;
  total: number;
}

export interface IGetPlaylist {
  collaborative: false;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: null;
    total: number;
  };
  href: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  public: null;
  snapshot_id: string;
  tracks: {
    href: string;
    items: [
      {
        added_at: string;
        added_by: {
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          type: string;
          uri: string;
        };
        is_local: false;
        track: {
          album: {
            album_type: string;
            available_markets: string[];
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            images: {
              height: number;
              url: string;
              width: number;
            }[];
            name: string;
            type: string;
            uri: string;
          };
          artists: [
            {
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              type: string;
              uri: string;
            }
          ];
          available_markets: string[];
          disc_number: number;
          duration_ms: number;
          explicit: false;
          external_ids: {
            isrc: string;
          };
          external_urls: {
            spotify: string;
          };
          href: string;
          id: string;
          name: string;
          popularity: number;
          preview_url: string;
          track_number: number;
          type: string;
          uri: string;
        };
      }
    ];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
  };
  type: string;
  uri: string;
}

export interface IGetAlbum {
  album_type: string;
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  copyrights: [
    {
      text: string;
      type: string;
    }
  ];
  external_ids: {
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  genres: [];
  href: string;
  id: string;
  images: IImage[];
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  tracks: {
    href: string;
    items: [
      {
        artists: [
          {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }
        ];
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
      }
    ];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
  };
  type: string;
  uri: string;
}

export interface IGetUserAlbums {
  href: string;
  items: [
    {
      added_at: string;
      album: {
        album_type: string;
        artists: [
          {
            external_urls: {
              spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }
        ];
        available_markets: string[];
        copyrights: [
          {
            text: string;
            type: string;
          },
          {
            text: string;
            type: string;
          }
        ];
        external_ids: {
          upc: string;
        };
        external_urls: {
          spotify: string;
        };
        genres: [];
        href: string;
        id: string;
        images: IImage[];
        name: string;
        popularity: number;
        release_date: string;
        release_date_precision: string;
        tracks: {
          href: string;
          items: [
            {
              artists: [
                {
                  external_urls: {
                    spotify: string;
                  };
                  href: string;
                  id: string;
                  name: string;
                  type: string;
                  uri: string;
                },
                {
                  external_urls: {
                    spotify: string;
                  };
                  href: string;
                  id: string;
                  name: string;
                  type: string;
                  uri: string;
                },
                {
                  external_urls: {
                    spotify: string;
                  };
                  href: string;
                  id: string;
                  name: string;
                  type: string;
                  uri: string;
                }
              ];
              available_markets: string[];
              disc_number: number;
              duration_ms: number;
              explicit: boolean;
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              preview_url: string;
              track_number: number;
              type: string;
              uri: string;
            },
            {
              artists: [
                {
                  external_urls: {
                    spotify: string;
                  };
                  href: string;
                  id: string;
                  name: string;
                  type: string;
                  uri: string;
                }
              ];
              available_markets: string[];
              disc_number: number;
              duration_ms: number;
              explicit: boolean;
              external_urls: {
                spotify: string;
              };
              href: string;
              id: string;
              name: string;
              preview_url: string;
              track_number: number;
              type: string;
              uri: string;
            }
          ];
          limit: number;
          next: null;
          offset: number;
          previous: null;
          total: number;
        };
        type: string;
        uri: string;
      };
    }
  ];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface IFollowedArtists {
  artists: {
    items: [
      {
        external_urls: {
          spotify: string;
        };
        followers: {
          href: null;
          total: number;
        };
        genres: [];
        href: string;
        id: string;
        images: IImage[];
        name: string;
        popularity: number;
        type: string;
        uri: string;
      }
    ];
    next: string;
    total: number;
    cursors: {
      after: string;
    };
    limit: number;
    href: number;
  };
}
