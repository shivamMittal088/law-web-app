import React, { useState } from "react";
import {
  WifiOff,
  RefreshCw,
  Scale,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
} from "lucide-react";

const FIRM = {
  name: "Mittal & Associates",
  phone: "+91-98765-43210",
  email: "contact@mittallaw.example",
  mapLink:
    "https://maps.google.com/?q=Mittal%20%26%20Associates%20Law%20Chambers",
  addressLine1: "Mittal Law Chambers, Connaught Place",
  addressLine2: "New Delhi, 110001",
};

export default function OfflinePage() {
  const [checking, setChecking] = useState(false);
  const [lastTried, setLastTried] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function pingConnectivity(timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
      // Lightweight connectivity check used by Chrome
      await fetch("https://www.gstatic.com/generate_204", {
        method: "GET",
        cache: "no-store",
        signal: controller.signal,
      });
      clearTimeout(id);
      return true;
    } catch {
      clearTimeout(id);
      return navigator.onLine || false;
    }
  }

  async function handleRetry() {
    setChecking(true);
    setErrorMsg("");
    setLastTried(new Date());
    const ok = await pingConnectivity();
    setChecking(false);
    if (ok) {
      // If connection is back, reload to resume the app
      window.location.reload();
    } else {
      setErrorMsg("Still offline. Please check your Wi-Fi or mobile data.");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Header / Brand */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 sm:p-7">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-white/15 rounded-xl p-2.5">
                <Scale className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold">
                  {FIRM.name}
                </h1>
                <p className="text-white/90 text-sm">
                  Advocates & Legal Consultants
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {/* Status */}
            <div className="flex items-center gap-2 text-slate-800">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-medium">
                <WifiOff className="w-4 h-4" />
                You’re offline
              </span>
            </div>

            {/* Message */}
            <div className="mt-4 sm:mt-5">
              <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
                We can’t load the page right now.
              </h2>
              <p className="mt-1.5 text-slate-600">
                Please check your internet connection. In the meantime, you can
                call, email, or visit our office using the options below.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleRetry}
                disabled={checking}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2.5 text-slate-900 font-medium hover:bg-amber-400 transition disabled:opacity-60"
              >
                <RefreshCw
                  className={`w-4 h-4 ${checking ? "animate-spin" : ""}`}
                />
                {checking ? "Checking…" : "Try again"}
              </button>

              <a
                href={`tel:${FIRM.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-slate-800 font-medium hover:bg-slate-50 transition"
              >
                <Phone className="w-4 h-4" />
                Call us
              </a>

              <a
                href={`mailto:${FIRM.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-slate-800 font-medium hover:bg-slate-50 transition"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

              <a
                href={FIRM.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-slate-800 font-medium hover:bg-slate-50 transition"
              >
                <MapPin className="w-4 h-4" />
                Directions
              </a>
            </div>

            {errorMsg ? (
              <p className="mt-3 text-sm text-rose-600">{errorMsg}</p>
            ) : null}
            {lastTried ? (
              <p className="mt-1 text-xs text-slate-500">
                Last tried: {lastTried.toLocaleTimeString()}
              </p>
            ) : null}

            {/* Helpful tips */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 font-medium text-slate-900">
                  <ShieldCheck className="w-4 h-4" />
                  Quick checks
                </div>
                <ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
                  <li>Toggle Airplane Mode off/on</li>
                  <li>Reconnect to Wi-Fi or data</li>
                  <li>Move to a better signal area</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 font-medium text-slate-900">
                  <Clock className="w-4 h-4" />
                  Office hours
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Mon–Sat: 10:00–18:00
                  <br />
                  Sunday: By appointment
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-center gap-2 font-medium text-slate-900">
                  <MapPin className="w-4 h-4" />
                  Visit us
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {FIRM.addressLine1}
                  <br />
                  {FIRM.addressLine2}
                </p>
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-8 text-xs text-slate-500">
              Tip: If you’re using our app as a PWA, this page appears when
              the network is unavailable. Your data remains safe.
            </p>
          </div>
        </div>

        {/* Minimal footer */}
        <div className="text-center text-xs text-slate-500 mt-4">
          © {new Date().getFullYear()} {FIRM.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
}
