"use client";

import { useState, useEffect, useMemo } from "react";
import { trips } from "@/lib/trips";

type TripPhotos = { folder: string; photos: string[]; count: number };
type GalleryData = { trips: TripPhotos[] };

export default function AdminPhotosPage() {
  const [galleryData, setGalleryData] = useState<TripPhotos[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/photos")
      .then((r) => r.json())
      .then((data: GalleryData) => {
        setGalleryData(data.trips);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const tripNameMap = useMemo(() => {
    const map: Record<string, string> = {};
    trips.forEach((t) => {
      map[t.id] = t.name.en;
    });
    return map;
  }, []);

  const filteredTrips = useMemo(() => {
    if (!searchQuery) return galleryData;
    const q = searchQuery.toLowerCase();
    return galleryData.filter(
      (t) =>
        t.folder.toLowerCase().includes(q) ||
        (tripNameMap[t.folder] || "").toLowerCase().includes(q)
    );
  }, [galleryData, searchQuery, tripNameMap]);

  const totalPhotos = useMemo(
    () => galleryData.reduce((sum, t) => sum + t.count, 0),
    [galleryData]
  );

  const stats = useMemo(() => {
    const ok = galleryData.filter((t) => t.count >= 9 && t.count <= 12).length;
    const under = galleryData.filter((t) => t.count < 9).length;
    const over = galleryData.filter((t) => t.count > 12).length;
    return { ok, under, over };
  }, [galleryData]);

  const selectedTripData = useMemo(
    () => galleryData.find((t) => t.folder === selectedTrip) || null,
    [galleryData, selectedTrip]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gradient-gold">
                Photo Gallery
              </h1>
              <p className="text-sm text-foreground/50">
                {loading
                  ? "Loading..."
                  : `${galleryData.length} trips · ${totalPhotos} photos`}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search trips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-3 py-2 rounded-lg bg-foreground/10 border border-border/30 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 w-48"
              />
            </div>
          </div>

          {/* Stats bar */}
          {!loading && (
            <div className="flex items-center gap-4 mt-3 text-xs">
              <span className="text-green-500">
                {stats.ok} trips OK (9–12)
              </span>
              {stats.under > 0 && (
                <span className="text-amber-500">
                  {stats.under} under ({"<"}9)
                </span>
              )}
              {stats.over > 0 && (
                <span className="text-red-500">
                  {stats.over} over ({">"}12)
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64 text-foreground/40">
            <p>Loading photos...</p>
          </div>
        ) : galleryData.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-foreground/40">
            <p>No photos found in public/photos/</p>
          </div>
        ) : selectedTrip && selectedTripData ? (
          /* ============== TRIP DETAIL VIEW ============== */
          <div>
            <button
              onClick={() => setSelectedTrip(null)}
              className="mb-4 px-4 py-2 rounded-lg border border-border/50 text-sm hover:bg-border/20 transition-colors"
            >
              ← Back to all trips
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {tripNameMap[selectedTrip] || selectedTrip}
              </h2>
              <p className="text-sm text-foreground/50">
                {selectedTripData.folder} · {selectedTripData.count} photos
              </p>
              <span
                className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                  selectedTripData.count >= 9 && selectedTripData.count <= 12
                    ? "bg-green-500/20 text-green-400"
                    : selectedTripData.count < 9
                    ? "bg-amber-500/20 text-amber-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {selectedTripData.count >= 9 && selectedTripData.count <= 12
                  ? "OK"
                  : selectedTripData.count < 9
                  ? "Under minimum"
                  : "Over maximum"}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {selectedTripData.photos.map((photo, i) => (
                <button
                  key={photo}
                  onClick={() => setLightboxPhoto(photo)}
                  className="aspect-square rounded-xl overflow-hidden border border-border/20 hover:border-primary/50 hover:scale-105 transition-all duration-200"
                >
                  <img
                    src={photo}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ============== GRID VIEW ============== */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTrips.map((trip) => {
              const tripName = tripNameMap[trip.folder] || trip.folder;
              const statusColor =
                trip.count >= 9 && trip.count <= 12
                  ? "border-green-500/40"
                  : trip.count < 9
                  ? "border-amber-500/40"
                  : "border-red-500/40";

              return (
                <button
                  key={trip.folder}
                  onClick={() => setSelectedTrip(trip.folder)}
                  className={`text-left rounded-xl overflow-hidden border-2 ${statusColor} hover:scale-[1.02] transition-all duration-200 bg-card`}
                >
                  {/* Preview collage */}
                  <div className="grid grid-cols-2 gap-0.5 h-40">
                    {trip.photos.slice(0, 4).map((photo, i) => (
                      <div
                        key={photo}
                        className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                      >
                        <img
                          src={photo}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-foreground truncate">
                      {tripName}
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-foreground/40">
                        {trip.folder}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          trip.count >= 9 && trip.count <= 12
                            ? "text-green-400"
                            : trip.count < 9
                            ? "text-amber-400"
                            : "text-red-400"
                        }`}
                      >
                        {trip.count} photos
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxPhoto(null)}
        >
          <img
            src={lightboxPhoto}
            alt="Full size"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
            onClick={() => setLightboxPhoto(null)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
