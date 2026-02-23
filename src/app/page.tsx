export default function Home() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui" }}>
            <div style={{ display: "grid", gap: 18 }}>
                <div style={{ letterSpacing: 2, textTransform: "uppercase", opacity: 0.7 }}>
                    Meliora Labs
                </div>

                <h1 style={{ fontSize: 44, lineHeight: 1.05, margin: 0 }}>
                    Software that feels inevitable.
                </h1>

                <p style={{ fontSize: 18, lineHeight: 1.6, opacity: 0.85, margin: 0 }}>
                    We build focused products for operations, commerce, and modern workflows.
                    Quietly ambitious. Ruthlessly practical.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                    <a
                        href="mailto:hello@melioralabs.io"
                        style={{
                            padding: "12px 16px",
                            borderRadius: 12,
                            background: "black",
                            color: "white",
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        Contact: hello@melioralabs.io
                    </a>

                    <a
                        href="https://github.com/melioralabsio"
                        style={{
                            padding: "12px 16px",
                            borderRadius: 12,
                            border: "1px solid rgba(0,0,0,0.15)",
                            textDecoration: "none",
                            fontWeight: 600,
                            color: "black",
                        }}
                    >
                        GitHub
                    </a>
                </div>

                <div style={{ marginTop: 26, opacity: 0.75 }}>
                    <p style={{ margin: 0 }}><b>In progress:</b></p>
                    <ul style={{ marginTop: 8, lineHeight: 1.8 }}>
                        <li>HOAM — homeowner association management</li>
                        <li>E-commerce — barbershop services and products</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}