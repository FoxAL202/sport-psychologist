import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a365d 0%, #172554 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "400px",
            height: "400px",
            background: "rgba(245, 158, 11, 0.12)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "350px",
            height: "350px",
            background: "rgba(96, 165, 250, 0.08)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #1e3a5f, #1a365d)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            СП
          </div>
        </div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.15,
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Спортивный психолог
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "600px",
          }}
        >
          Помогаю юным спортсменам раскрыть свой потенциал
        </p>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "24px",
          }}
        >
          <span style={{ color: "#f59e0b", fontSize: "20px" }}>Хоккей</span>
          <span style={{ color: "#64748b", fontSize: "20px" }}>·</span>
          <span style={{ color: "#f59e0b", fontSize: "20px" }}>Футбол</span>
          <span style={{ color: "#64748b", fontSize: "20px" }}>·</span>
          <span style={{ color: "#f59e0b", fontSize: "20px" }}>Теннис</span>
          <span style={{ color: "#64748b", fontSize: "20px" }}>·</span>
          <span style={{ color: "#f59e0b", fontSize: "20px" }}>Гимнастика</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
