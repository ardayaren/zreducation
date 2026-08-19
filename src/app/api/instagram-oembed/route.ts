import { NextRequest, NextResponse } from "next/server";

const INSTAGRAM_OEMBED =
  "https://api.instagram.com/oembed?hidecaption=true&omitscript=true&url=";

export interface InstagramOEmbed {
  thumbnail_url?: string;
  title?: string;
  author_name?: string;
  author_url?: string;
}

const cache = new Map<string, { data: InstagramOEmbed; at: number }>();
const TTL = 60 * 60 * 24 * 7; // 7 gün önbellek

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  const validPattern =
    /^https:\/\/www\.instagram\.com\/(p|reel|reels|tv)\/[A-Za-z0-9_-]+\/?/;

  if (!url || !validPattern.test(url)) {
    return NextResponse.json(
      {
        error:
          "Geçerli bir Instagram paylaşım URL'si gereklidir (https://www.instagram.com/p/... veya /reel/...). Profil linkleri desteklenmez.",
        thumbnail_url: undefined,
        title: undefined,
        author_name: undefined,
        author_url: undefined,
      },
      { status: 400 }
    );
  }

  const cached = cache.get(url);
  if (cached && Date.now() - cached.at < TTL) {
    return NextResponse.json(cached.data);
  }

  try {
    const res = await fetch(`${INSTAGRAM_OEMBED}${encodeURIComponent(url)}`, {
      headers: { Accept: "application/json" },
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          error: `Instagram oEmbed hatası (${res.status})`,
          thumbnail_url: undefined,
          title: undefined,
          author_name: undefined,
          author_url: undefined,
        },
        { status: res.status }
      );
    }

    const json = await res.json();
    const data: InstagramOEmbed = {
      thumbnail_url: json.thumbnail_url as string | undefined,
      title: json.title as string | undefined,
      author_name: json.author_name as string | undefined,
      author_url: json.author_url as string | undefined,
    };

    cache.set(url, { data, at: Date.now() });

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      {
        error: "Instagram oEmbed isteği başarısız oldu",
        thumbnail_url: undefined,
        title: undefined,
        author_name: undefined,
        author_url: undefined,
      },
      { status: 500 }
    );
  }
}
