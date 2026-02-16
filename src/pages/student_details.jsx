import React, { useEffect, useState } from "react";
import Student from "../components/StudentComponents/students";
import Modal from "../components/StudentComponents/modal";
import StudentCard from "../components/StudentComponents/student_card";
import { fetchStudents } from "../api/student_api";

export default function Students() {
  const [tab, setTab] = useState("private");
  const [privateList, setPrivateList] = useState([]);
  const [pLoading, setPLoading] = useState(true);
  const [pError, setPError] = useState(null);
  const [publicList, setPublicList] = useState([]);
  const [uLoading, setULoading] = useState(true);
  const [uError, setUError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let mounted = true;

    // Fetch private students
    fetchStudents()
      .then((d) => mounted && setPrivateList(d))
      .catch((e) => mounted && setPError(e.message))
      .finally(() => mounted && setPLoading(false));

    // Fetch public students
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const mapped = data.slice(0, 10).map((u, idx) => ({
          id: u.id,
          name: u.name,
          age: 18 + (idx % 5),
          major: ["Computer Science", "Mathematics", "Biology", "History"][
            idx % 4
          ],
          email: u.email,
        }));
        setPublicList(mapped);
      })
      .catch((e) => mounted && setUError(e.message))
      .finally(() => mounted && setULoading(false));

    return () => (mounted = false);
  }, []);

  // Filter logic
  const currentList = tab === "private" ? privateList : publicList;
  const filteredList = currentList.filter((student) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.name.toLowerCase().includes(searchLower) ||
      student.major.toLowerCase().includes(searchLower) ||
      student.age.toString().includes(searchLower)
    );
  });

  return (
    <div className="container">
      <div className="hero">
        <div>
          <h2>Student Directory</h2>
          <p style={{ color: "var(--text-secondary)", margin: "8px 0 0 0" }}>
            {tab === "private"
              ? `${privateList.length} private records`
              : `${publicList.length} public API records`}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "var(--space-md)",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Search students..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="tabs">
            <button
              className={`tab ${tab === "private" ? "active" : ""}`}
              onClick={() => setTab("private")}
            >
              Private Data
            </button>
            <button
              className={`tab ${tab === "public" ? "active" : ""}`}
              onClick={() => setTab("public")}
            >
              Public API
            </button>
          </div>
        </div>
      </div>

      {/* Private Tab */}
      {tab === "private" && (
        <>
          {pLoading && (
            <div className="loading-state">
              <p>Loading private students...</p>
            </div>
          )}

          {pError && (
            <div className="error-state">
              <p>Error: {pError}</p>
            </div>
          )}

          {!pLoading && !pError && filteredList.length === 0 && (
            <div className="loading-state">
              <p>No students found matching "{searchTerm}"</p>
            </div>
          )}

          <div className="grid">
            {filteredList.map((s) => (
              <Student key={s.id} student={s} />
            ))}
          </div>
        </>
      )}

      {/* Public Tab */}
      {tab === "public" && (
        <>
          {uLoading && (
            <div className="loading-state">
              <p>Loading public students from API...</p>
            </div>
          )}

          {uError && (
            <div className="error-state">
              <p>Error: {uError}</p>
            </div>
          )}

          {!uLoading && !uError && filteredList.length === 0 && (
            <div className="loading-state">
              <p>No students found matching "{searchTerm}"</p>
            </div>
          )}

          <div className="grid">
            {filteredList.map((s) => (
              <StudentCard key={s.id} student={s} onClick={setSelected} />
            ))}
          </div>
        </>
      )}

      {/* Modal for public students */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <h3>{selected.name}</h3>
            <div
              style={{
                display: "grid",
                gap: "var(--space-md)",
                marginTop: "var(--space-lg)",
              }}
            >
              <p>
                <strong>Age:</strong> {selected.age}
              </p>
              <p>
                <strong>Major:</strong> {selected.major}
              </p>
              <p>
                <strong>Email:</strong> {selected.email}
              </p>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
