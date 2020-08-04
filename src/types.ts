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
