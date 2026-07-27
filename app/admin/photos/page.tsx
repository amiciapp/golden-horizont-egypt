"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { trips, categories, type Trip } from "@/lib/trips";

type PhotoAssignments = Record<string, string[]>;

const STORAGE_KEY = "golden_horizont_photo_assignments";

const tripColors = [
  "#ef4444", "#3b82f6", "#22c55e", "#eab308",
  "#a855f7", "#ec4899", "#6366f1", "#14b8a6",
  "#f97316", "#06b6d4", "#f43f5e", "#8b5cf6",
  "#f59e0b", "#84cc16", "#10b981", "#d946ef",
  "#0ea5e9", "#64748b", "#78716c", "#737373",
  "#f87171", "#60a5fa", "#4ade80"
];

export default function AdminPhotosPage() {
  const [assignments, setAssignments] = useState<PhotoAssignments>({});
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [saved, setSaved] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "trip">("grid");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setAssignments(JSON.parse(stored));
    } catch (e) { console.error("Error:", e); }
  }, []);

  const photoIds = useMemo(() => {
    const ids: string[] = [];
    for (let i = 1; i <= 239; i++) ids.push(i.toString());
    return ids;
  }, []);

  const saveAssignments = useCallback((updated: PhotoAssignments) => {
    setAssignments(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e) { console.error("Error:", e); }
  }, []);

  const togglePhoto = (photoId: string) => {
    setSelectedPhotos((prev) => {
      const next = new Set(prev);
      if (next.has(photoId)) next.delete(photoId);
      else next.add(photoId);
      return next;
    });
  };

  const assignPhotosToTrip = (photoIds: string[], tripId: string) => {
    const updated = { ...assignments };
    photoIds.forEach((photoId) => {
      if (!updated[tripId]) updated[tripId] = [];
      if (!updated[tripId].includes(photoId)) {
        updated[tripId] = [...(updated[tripId] || []), photoId];
      }
    });
    saveAssignments(updated);
  };

  const assignSelectedToTrip = (tripId: string) => {
    if (selectedPhotos.size === 0) return;
    assignPhotosToTrip(Array.from(selectedPhotos), tripId);
  };

  const removePhotosFromTrip = (photoIds: string[], tripId: string) => {
    const updated = { ...assignments };
    if (updated[tripId]) {
      updated[tripId] = updated[tripId].filter((p) => !photoIds.includes(p));
      if (updated[tripId].length === 0) delete updated[tripId];
    }
    saveAssignments(updated);
  };

  const removeSelectedFromTrip = (tripId: string) => {
    if (selectedPhotos.size === 0) return;
    removePhotosFromTrip(Array.from(selectedPhotos), tripId);
  };

  const clearTrip = (tripId: string) => {
    const updated = { ...assignments };
    delete updated[tripId];
    saveAssignments(updated);
  };

  const clearSelection = () => setSelectedPhotos(new Set());

  const selectAllUnassigned = () => {
    setSelectedPhotos(new Set(unassignedPhotoIds));
  };

  const getTripForPhoto = (photoId: string): Trip | null => {
    for (const [tripId, photos] of Object.entries(assignments)) {
      if (photos.includes(photoId)) {
        return trips.find((t) => t.id === tripId) || null;
      }
    }
    return null;
  };

  const getTripsForPhoto = (photoId: string): Trip[] => {
    const result: Trip[] = [];
    for (const [tripId, photos] of Object.entries(assignments)) {
      if (photos.includes(photoId)) {
        const trip = trips.find((t) => t.id === tripId);
        if (trip) result.push(trip);
      }
    }
    return result;
  };

  const getTripIndex = (tripId: string): number =>
    trips.findIndex((t) => t.id === tripId);

  const filteredTrips = useMemo(() => {
    let filtered = trips;
    if (activeCategory !== "all") {
      filtered = filtered.filter((t) => t.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((t) =>
        t.name.en.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  const assignedPhotoIds = useMemo(() => {
    const ids = new Set<string>();
    Object.values(assignments).forEach((photos) => photos.forEach((p) => ids.add(p)));
    return ids;
  }, [assignments]);

  const unassignedPhotoIds = useMemo(
    () => photoIds.filter((id) => !assignedPhotoIds.has(id)),
    [photoIds, assignedPhotoIds]
  );

  const exportConfig = () => {
    const config: Record<string, string[]> = {};
    Object.entries(assignments).forEach(([tripId, photos]) => {
      config[tripId] = photos;
    });
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "photo-assignments.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const renderPhotoThumb = (id: string, opts?: { borderColor?: string; dim?: boolean; size?: "sm" | "md" }) => {
    const selected = selectedPhotos.has(id);
    const trips = getTripsForPhoto(id);
    const isMultiAssigned = trips.length > 1;
    return (
      <button
        key={id}
        onClick={() => togglePhoto(id)}
        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          selected ? "ring-2 ring-primary ring-offset-2 ring-offset-black scale-105" : "hover:scale-105"
        } ${opts?.dim ? "opacity-50" : ""}`}
        style={{
          borderColor: selected ? "#D4AF37" : opts?.borderColor || "rgba(255,255,255,0.1)",
        }}
        title={trips.length > 0 ? `Assigned to: ${trips.map((t) => t.name.en).join(", ")}` : "Unassigned"}
      >
        <img
          src={`/photos/photo-${id}.webp`}
          alt={`Photo ${id}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {selected && (
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground shadow-lg">
              {Array.from(selectedPhotos).indexOf(id) + 1}
            </div>
          </div>
        )}
        {isMultiAssigned && !selected && (
          <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-amber-500 border border-black" title="Assigned to multiple trips" />
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gradient-gold">Photo Manager</h1>
            <p className="text-sm text-foreground/50">
              {selectedPhotos.size > 0
                ? `${selectedPhotos.size} selected · ${assignedPhotoIds.size}/${photoIds.length} assigned`
                : `${assignedPhotoIds.size}/${photoIds.length} assigned`}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {saved && <span className="text-sm text-green-500 animate-pulse">Saved!</span>}
            {selectedPhotos.size > 0 && (
              <>
                <span className="text-sm text-foreground/60 px-2 py-1 rounded bg-foreground/10">
                  {selectedPhotos.size} selected
                </span>
                <button onClick={clearSelection} className="px-3 py-1.5 rounded-lg border border-border/50 text-xs hover:bg-border/20 transition-colors">
                  Clear
                </button>
                <button onClick={selectAllUnassigned} className="px-3 py-1.5 rounded-lg border border-border/50 text-xs hover:bg-border/20 transition-colors">
                  Select All Unassigned
                </button>
              </>
            )}
            <button
              onClick={() => { setViewMode(viewMode === "grid" ? "trip" : "grid"); }}
              className="px-4 py-2 rounded-lg border border-border/50 text-sm hover:bg-border/20 transition-colors"
            >
              {viewMode === "grid" ? "Trip View" : "Grid View"}
            </button>
            <button onClick={exportConfig} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all">
              Export JSON
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {viewMode === "grid" ? (
          /* ============== GRID VIEW ============== */
          <div className="flex gap-8 flex-col lg:flex-row">
            {/* Photo Grid */}
            <div className="flex-1 min-w-0">
              {/* Selected photos preview */}
              {selectedPhotos.size > 0 && (
                <div className="mb-6 p-4 rounded-xl bg-card border border-primary/30">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-primary">
                      {selectedPhotos.size} photo{selectedPhotos.size > 1 ? "s" : ""} selected
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-foreground/50">
                        Click a trip below to assign
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {Array.from(selectedPhotos).slice(0, 20).map((id) => (
                      <div key={id} className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border border-primary/50">
                        <img src={`/photos/photo-${id}.webp`} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {selectedPhotos.size > 20 && (
                      <div className="w-16 h-16 shrink-0 rounded-lg bg-foreground/10 flex items-center justify-center text-xs text-foreground/50">
                        +{selectedPhotos.size - 20}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Unassigned section */}
              {unassignedPhotoIds.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground/80 mb-4">
                    Unassigned Photos ({unassignedPhotoIds.length})
                  </h2>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                    {unassignedPhotoIds.map((id) => renderPhotoThumb(id))}
                  </div>
                </div>
              )}

              {/* Assigned section */}
              {assignedPhotoIds.size > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground/80 mb-4">
                    Assigned Photos ({assignedPhotoIds.size})
                  </h2>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                    {photoIds.filter((id) => assignedPhotoIds.has(id)).map((id) => {
                      const trip = getTripForPhoto(id);
                      const idx = trip ? getTripIndex(trip.id) : 0;
                      return renderPhotoThumb(id, { borderColor: tripColors[idx % tripColors.length] });
                    })}
                  </div>
                </div>
              )}

              {unassignedPhotoIds.length === 0 && assignedPhotoIds.size === 0 && (
                <div className="flex items-center justify-center h-64 text-foreground/40">
                  <p>No photos found in public/photos/</p>
                </div>
              )}
            </div>

            {/* Sidebar - Trip Assignment */}
            <div className="w-full lg:w-80 shrink-0 space-y-4">
              {/* Quick assign to categories */}
              {selectedPhotos.size > 0 && (
                <div className="p-4 rounded-xl bg-card border border-primary/30">
                  <h3 className="text-sm font-semibold text-primary mb-2">Quick Assign</h3>
                  <div className="flex flex-wrap gap-1">
                    {categories.filter((c) => c.id !== "all").map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          trips.filter((t) => t.category === cat.id).forEach((t) => {
                            assignPhotosToTrip(Array.from(selectedPhotos).slice(), t.id);
                          });
                        }}
                        className="px-2 py-1 text-xs rounded-lg bg-foreground/10 hover:bg-primary/20 text-foreground/70 hover:text-primary transition-all"
                      >
                        All {cat.id}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trip list */}
              <div className="p-4 rounded-xl bg-card border border-border/50">
                <h3 className="text-sm font-semibold text-foreground/80 mb-3">
                  Trips {selectedPhotos.size > 0 && <span className="text-primary">· click to assign</span>}
                </h3>

                {/* Category filter */}
                <div className="flex flex-wrap gap-1 mb-3">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`px-2 py-1 text-xs rounded-full transition-colors ${
                      activeCategory === "all"
                        ? "bg-primary text-primary-foreground"
                        : "bg-foreground/10 text-foreground/60 hover:bg-foreground/20"
                    }`}
                  >
                    All
                  </button>
                  {categories.filter((c) => c.id !== "all").map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-2 py-1 text-xs rounded-full transition-colors ${
                        activeCategory === cat.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/10 text-foreground/60 hover:bg-foreground/20"
                      }`}
                    >
                      {cat.id}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <input
                  type="text"
                  placeholder="Search trips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-foreground/10 border border-border/30 text-sm text-foreground mb-3 placeholder:text-foreground/30 focus:outline-none focus:border-primary/50"
                />

                {/* Trip items */}
                <div className="space-y-1 max-h-[60vh] overflow-y-auto">
                  {filteredTrips.map((trip) => {
                    const tripPhotos = assignments[trip.id] || [];
                    const hasSelected = selectedPhotos.size > 0;
                    return (
                      <div key={trip.id} className="group">
                        <button
                          onClick={() => {
                            if (hasSelected) assignSelectedToTrip(trip.id);
                          }}
                          className={`w-full text-left p-2 rounded-lg text-xs transition-all ${
                            hasSelected
                              ? "hover:bg-primary/15 cursor-pointer"
                              : "cursor-default"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-foreground/80 truncate flex-1 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tripColors[getTripIndex(trip.id) % tripColors.length] }} />
                              {trip.name.en}
                            </span>
                            <span className="text-foreground/40 shrink-0">{tripPhotos.length}</span>
                          </div>
                          <div className="flex items-center gap-1 mt-1 ml-4">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-foreground/10 text-foreground/50">
                              {trip.category}
                            </span>
                            {tripPhotos.length > 0 && (
                              <button
                                onClick={(e) => { e.stopPropagation(); clearTrip(trip.id); }}
                                className="text-[10px] text-red-500/50 hover:text-red-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                clear
                              </button>
                            )}
                          </div>
                        </button>
                        {/* Show assigned photos inline */}
                        {tripPhotos.length > 0 && tripPhotos.length <= 10 && (
                          <div className="flex gap-1 px-2 pb-2 flex-wrap">
                            {tripPhotos.map((pid) => (
                              <button
                                key={pid}
                                onClick={() => togglePhoto(pid)}
                                className={`w-8 h-8 rounded overflow-hidden border transition-all ${
                                  selectedPhotos.has(pid) ? "border-primary scale-110" : "border-transparent hover:border-white/30"
                                }`}
                              >
                                <img src={`/photos/photo-${pid}.webp`} alt="" className="w-full h-full object-cover" loading="lazy" />
                              </button>
                            ))}
                          </div>
                        )}
                        {selectedPhotos.size > 0 && tripPhotos.some((pid) => selectedPhotos.has(pid)) && (
                          <div className="px-2 pb-2">
                            <button
                              onClick={(e) => { e.stopPropagation(); removeSelectedFromTrip(trip.id); }}
                              className="text-[10px] text-red-400 hover:text-red-300"
                            >
                              Remove {selectedPhotos.size} selected from this trip
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ============== TRIP VIEW ============== */
          <div className="space-y-12">
            {filteredTrips.map((trip, idx) => {
              const tripPhotos = assignments[trip.id] || [];
              const hasSelectedInTrip = tripPhotos.some((pid) => selectedPhotos.has(pid));
              return (
                <div key={trip.id} className="p-6 rounded-2xl bg-card border border-border/30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">{trip.name.en}</h2>
                      <p className="text-sm text-foreground/50">{trip.category} — {tripPhotos.length} photos</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tripColors[idx % tripColors.length] }} />
                      {hasSelectedInTrip && (
                        <button
                          onClick={() => removeSelectedFromTrip(trip.id)}
                          className="text-xs text-red-400 hover:text-red-300"
                        >
                          Remove selected
                        </button>
                      )}
                      <button onClick={() => clearTrip(trip.id)} className="text-xs text-red-500/50 hover:text-red-500">
                        Clear all
                      </button>
                    </div>
                  </div>

                  {/* Assigned photos */}
                  <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 xl:grid-cols-12 gap-2 mb-4">
                    {tripPhotos.length > 0 ? (
                      tripPhotos.map((photoId) => renderPhotoThumb(photoId, { borderColor: tripColors[idx % tripColors.length] }))
                    ) : (
                      <p className="text-sm text-foreground/30 col-span-full">
                        No photos assigned yet. Switch to Grid View to assign.
                      </p>
                    )}
                  </div>

                  {/* Quick assign unassigned photos */}
                  {unassignedPhotoIds.length > 0 && (
                    <details className="text-sm">
                      <summary className="text-foreground/50 cursor-pointer hover:text-foreground/80 transition-colors">
                        Add unassigned photos (+{unassignedPhotoIds.length} available)
                      </summary>
                      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 xl:grid-cols-12 gap-2 mt-3">
                        {unassignedPhotoIds.slice(0, 50).map((photoId) => {
                          const selected = selectedPhotos.has(photoId);
                          return (
                            <button
                              key={photoId}
                              onClick={() => {
                                if (selected) {
                                  togglePhoto(photoId);
                                } else {
                                  assignPhotosToTrip([photoId], trip.id);
                                }
                              }}
                              className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                                selected ? "border-primary" : "border-dashed border-border/30 hover:border-primary/50"
                              }`}
                              title={selected ? "Click to deselect" : "Click to assign"}
                            >
                              <img
                                src={`/photos/photo-${photoId}.webp`}
                                alt={`Photo ${photoId}`}
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                                loading="lazy"
                              />
                            </button>
                          );
                        })}
                      </div>
                    </details>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
