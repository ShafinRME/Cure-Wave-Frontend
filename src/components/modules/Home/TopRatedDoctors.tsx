"use client";

import { useEffect, useState } from "react";
import { Star, Award, Clock, DollarSign, MapPin, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IDoctor } from "@/types/doctor.interface";
import { getInitials } from "@/lib/formatters";
import Link from "next/link";

// ── Individual doctor card ─────────────────────────────────────────────────────
function DoctorCard({ doctor }: { doctor: IDoctor }) {
  const primarySpecialty = doctor.doctorSpecialties?.[0]?.specialities?.title;

  return (
    <Card className="group relative overflow-hidden border transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1.5">
      <div className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-green-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
        <Award className="h-3 w-3" />
        Verified
      </div>

      <CardHeader className="relative bg-gradient-to-br from-blue-50/80 to-indigo-50/40 dark:from-blue-950/30 dark:to-indigo-950/20 p-8 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          <Avatar className="h-28 w-28 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
            <AvatarImage src={doctor.profilePhoto || ""} alt={doctor.name} />
            <AvatarFallback className="text-2xl bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
              {getInitials(doctor.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 p-6">
        <div className="text-center">
          <h3 className="mb-1.5 text-lg font-bold text-foreground transition-colors group-hover:text-blue-600 line-clamp-1">
            Dr. {doctor.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
            {doctor.designation}
          </p>
          {primarySpecialty && (
            <Badge className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-300">
              {primarySpecialty}
            </Badge>
          )}
        </div>

        <div className="border-y border-border py-4 space-y-2.5">
          <div className="flex items-center justify-center gap-2 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-foreground">
              {doctor.averageRating?.toFixed(1) ?? "N/A"}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-3.5 w-3.5 shrink-0" />
            <span>{doctor.experience} years experience</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm">
            <DollarSign className="h-3.5 w-3.5 text-green-500 shrink-0" />
            <span className="font-semibold text-foreground">${doctor.appointmentFee}</span>
            <span className="text-muted-foreground text-xs">/ consultation</span>
          </div>
          {doctor.currentWorkingPlace && (
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="line-clamp-1">{doctor.currentWorkingPlace}</span>
            </div>
          )}
        </div>

        {doctor.doctorSpecialties && doctor.doctorSpecialties.length > 1 && (
          <div className="flex flex-wrap justify-center gap-1">
            {doctor.doctorSpecialties.slice(1, 3).map((s) => (
              <Badge key={s.specialitiesId} variant="outline" className="text-xs">
                {s.specialities?.title}
              </Badge>
            ))}
            {doctor.doctorSpecialties.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{doctor.doctorSpecialties.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-3 p-6 pt-0">
        <Link href={`/consultation/doctor/${doctor.id}`}>
          <Button variant="outline" className="w-full border transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950">
            View Profile
          </Button>
        </Link>
        <Link href={`/consultation?highlight=${doctor.id}`}>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

function SkeletonCard() {
  return (
    <Card className="overflow-hidden animate-pulse">
      <CardHeader className="h-44 bg-muted" />
      <CardContent className="p-6 space-y-3">
        <div className="h-5 w-2/3 mx-auto rounded bg-muted" />
        <div className="h-4 w-1/2 mx-auto rounded bg-muted" />
        <div className="h-px w-full bg-muted" />
        <div className="space-y-2">
          <div className="h-4 w-1/3 mx-auto rounded bg-muted" />
          <div className="h-4 w-1/2 mx-auto rounded bg-muted" />
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-3 p-6 pt-0">
        <div className="h-9 rounded bg-muted" />
        <div className="h-9 rounded bg-muted" />
      </CardFooter>
    </Card>
  );
}

// ── Main — client component so console.logs appear in BROWSER devtools ────────
const TopRatedDoctors = () => {
  const [doctors, setDoctors] = useState<IDoctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<string>("");

  useEffect(() => {
    const fetchDoctors = async () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
      const url = `${baseUrl}/doctors?limit=3&sortBy=averageRating&sortOrder=desc`;

      // All these appear in browser Console tab (F12)
      console.log("=== TopRatedDoctors Debug ===");
      console.log("NEXT_PUBLIC_BASE_API_URL:", baseUrl);
      console.log("Full URL being fetched:", url);

      setDebugInfo(`Fetching: ${url}`);

      try {
        const res = await fetch(url);

        console.log("HTTP status:", res.status, res.statusText);

        const json = await res.json();

        console.log("Raw response JSON:", json);
        console.log("json.data:", json?.data);
        console.log("doctors count:", json?.data?.length ?? 0);

        const data: IDoctor[] = Array.isArray(json) ? json : (json?.data ?? []);
        setDoctors(data);
        setDebugInfo(`✅ ${data.length} doctors fetched | Status ${res.status} | ${url}`);
      } catch (err) {
        console.error("❌ Fetch failed:", err);
        setDebugInfo(`❌ Error: ${String(err)} | URL: ${url}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-background">
      <div className="absolute right-0 top-0 h-80 w-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 translate-y-1/2 -translate-x-1/2 rounded-full bg-indigo-400/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
            <Star className="h-3.5 w-3.5 fill-blue-700 dark:fill-blue-300" />
            Top Rated
          </div>
          <h2 className="mb-3 text-3xl font-bold text-foreground lg:text-4xl">
            Our Top Rated Doctors
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Hand-picked specialists with the highest patient ratings — ready to
            provide you with world-class care.
          </p>
        </div>

        {/* 🔍 Debug strip — visible on page. Remove after issue is fixed. */}
        {debugInfo && (
          <div className="mb-8 mx-auto max-w-3xl rounded-lg border border-yellow-300 bg-yellow-50 dark:bg-yellow-950/40 dark:border-yellow-700 px-4 py-3 text-xs font-mono text-yellow-900 dark:text-yellow-200 break-all">
            🔍 {debugInfo}
          </div>
        )}

        {/* Grid */}
        {loading || doctors.length === 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/consultation">
            <Button
              size="lg"
              className="group h-auto gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-3.5 text-base font-medium shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              View All Doctors
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Browse our network of 1,000+ certified medical professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
