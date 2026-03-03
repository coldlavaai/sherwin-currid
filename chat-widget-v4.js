/* ═══════════════════════════════════════════════════════
   V4 Premium Chat Widget JavaScript
   Sherwin Currid Accountancy - NO PLACEHOLDERS!
   ═══════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // V4 CONFIGURATION - NO PLACEHOLDERS!
  const config = {
    businessName: 'Sherwin Currid Accountancy',
    primaryColor: '#1e3a8a',
    botName: 'Accountancy Assistant',
    botEmoji: '📊',
    theme: 'light',
    greeting: 'Hello! 👋 Welcome to Sherwin Currid Accountancy. I\'m here to help with any questions about our ACCA accredited accounting services. How can I assist you?',
    quickReplies: [
      'Book appointment',
      'Tax advice',
      'Making Tax Digital',
      'Pricing',
      'Contact us'
    ],
    responses: [
      {
        keywords: ['book', 'booking', 'appointment', 'schedule', 'reserve', 'consultation', 'meeting'],
        answer: 'I\'d be happy to help you book an appointment! 📅\\n\\nHere\'s how:\\n\\n📞 **Call us** on 0800 1357157\\n📧 **Email** info@sherwincurrid.com\\n\\nOr visit our website to use our online booking system.\\n\\nWe look forward to speaking with you!'
      },
      {
        keywords: ['tax', 'advice', 'tax advice', 'self-assessment', 'self assessment', 'personal tax'],
        answer: '📋 **Tax Advice Services**\\n\\nWe provide comprehensive tax services including:\\n\\n✓ Self-assessment tax returns\\n✓ IR35 and contractor tax\\n✓ Construction Industry Scheme (CIS)\\n✓ Capital gains tax planning\\n✓ Landlord tax services\\n\\nProactive advice from ACCA accredited experts.\\n\\n📞 Call 0800 1357157 for a consultation'
      },
      {
        keywords: ['mtd', 'making tax digital', 'digital', 'hmrc', 'compliance'],
        answer: '💻 **Making Tax Digital (MTD)**\\n\\nWe help you stay compliant with:\\n\\n✓ MTD for VAT\\n✓ MTD for income tax\\n✓ MTD for sole traders\\n✓ MTD for landlords\\n\\nStay ahead of HMRC requirements with expert guidance.\\n\\n📞 Call 0800 1357157 to get started'
      },
      {
        keywords: ['bookkeeping', 'accounting', 'accounts', 'xero', 'quickbooks', 'freeagent', 'software'],
        answer: '📊 **Bookkeeping & Accounting Software**\\n\\nWe\'re certified partners for:\\n\\n✓ Xero\\n✓ QuickBooks\\n✓ FreeAgent (Platinum Partner)\\n✓ Sage\\n\\nCloud accounting migration and ongoing support.\\n\\n📞 Call 0800 1357157 for software advice'
      },
      {
        keywords: ['landlord', 'rental', 'property', 'holiday let', 'portfolio'],
        answer: '🏠 **Landlord Services**\\n\\nSpecialist accountancy for property owners:\\n\\n✓ Rental property tax planning\\n✓ Holiday let accounting\\n✓ Property portfolio advice\\n✓ Tax-efficient structures\\n\\nManage your property finances effectively.\\n\\n📞 Call 0800 1357157'
      },
      {
        keywords: ['ir35', 'contractor', 'freelance', 'self-employed', 'sole trader'],
        answer: '👤 **Contractor & Freelancer Services**\\n\\nDedicated support including:\\n\\n✓ IR35 contract reviews\\n✓ Sole trader vs limited company advice\\n✓ Fixed fee packages\\n✓ Self-employment tax planning\\n\\nTailored solutions for contractors.\\n\\n📞 Call 0800 1357157'
      },
      {
        keywords: ['price', 'prices', 'pricing', 'cost', 'costs', 'fee', 'fees', 'fixed'],
        answer: '💰 **Fixed Fee Pricing**\\n\\nWe offer transparent, fixed-cost packages with:\\n\\n✓ No hidden fees\\n✓ Guaranteed turnaround times\\n✓ Competitive rates\\n✓ Quality ACCA-accredited service\\n\\nGet a personalised quote:\\n📞 0800 1357157\\n📧 info@sherwincurrid.com'
      },
      {
        keywords: ['location', 'locations', 'office', 'where', 'address', 'guildford', 'surrey'],
        answer: '📍 **Our Locations**\\n\\n**Head Office:**\\n32 London Road\\nGuildford, Surrey GU1 2AB\\n\\nWe also serve clients across:\\n✓ Surrey & Hampshire\\n✓ London & Kent\\n✓ Sussex\\n✓ 20+ locations\\n\\n📞 0800 1357157'
      },
      {
        keywords: ['contact', 'phone', 'email', 'reach', 'get in touch'],
        answer: 'Here\'s how to reach us:\\n\\n📍 **Address:** 32 London Road, Guildford, Surrey GU1 2AB\\n📞 **Phone:** 0800 1357157\\n📧 **Email:** info@sherwincurrid.com\\n🌐 **Website:** www.sherwincurrid.com\\n\\nACCA accredited with 15+ years experience. We look forward to hearing from you!'
      },
      {
        keywords: ['about', 'who', 'history', 'experience', 'established', 'acca', 'accredited'],
        answer: 'Sherwin Currid Accountancy has been providing professional, personalised accounting services for over 15 years.\\n\\nFounded by **Martyn Currid** and **Max Sherwin**, we\'re ACCA accredited with offices across Surrey, Hampshire, Sussex, Kent and London.\\n\\n⭐ **5-star rated** (50+ Google reviews)\\n📍 **20+ locations** served\\n✓ **ACCA Accredited** for total confidence'
      },
      {
        keywords: ['review', 'reviews', 'testimonial', 'rating', 'google', 'stars'],
        answer: '⭐ **5 out of 5 stars** from 50+ Google reviews!\\n\\nWhat clients say:\\n\\n💬 *"Professional, punctual and polite – No need to look elsewhere!"* - Pasquale Cataldi\\n\\n💬 *"Extremely helpful & responsive"* - Terry Ryder-Lee\\n\\n📞 Call 0800 1357157 to experience our 5-star service'
      }
    ],
    fallback: 'Thanks for your question! For the best answer, I\'d recommend speaking with our ACCA accredited team directly:\\n\\n📞 0800 1357157\\n📧 info@sherwincurrid.com\\n\\nOr I can help you book an appointment — just let me know! 😊'
  };

  // State
  let messages = [];
  let isOpen = false;

  // Create widget HTML
  function createWidget() {
    const widgetHTML = `
      <div class="chat-widget">
        <!-- Chat Window -->
        <div class="chat-window" id="chat-window">
          <!-- Header with brand gradient -->
          <div class="chat-header">
            <div class="chat-header-info">
              <div class="chat-header-avatar">${config.botEmoji}</div>
              <div class="chat-header-text">
                <h3>${config.businessName}</h3>
                <p>Online now</p>
              </div>
            </div>
            <button class="chat-close" id="chat-close" aria-label="Close chat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M12 4L4 12M4 4l8 8"/>
              </svg>
            </button>
          </div>

          <!-- Messages -->
          <div class="chat-messages" id="chat-messages"></div>

          <!-- Quick Replies -->
          <div class="quick-replies" id="quick-replies"></div>

          <!-- Input -->
          <div class="chat-input-wrapper">
            <div class="chat-input-container">
              <input
                type="text"
                class="chat-input"
                id="chat-input"
                placeholder="Type your message..."
                aria-label="Chat message input"
              />
              <button class="chat-send" id="chat-send" aria-label="Send message">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Chat Bubble Button -->
        <button class="chat-bubble" id="chat-bubble" aria-label="Open chat">
          <span id="chat-bubble-icon">${config.botEmoji}</span>
        </button>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
  }

  // Add message to chat
  function addMessage(text, sender = 'bot') {
    const messagesContainer = document.getElementById('chat-messages');
    const messageHTML = `
      <div class="message ${sender}">
        <div class="message-bubble">${formatMessage(text)}</div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messages.push({ text, sender, timestamp: new Date() });
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Format message (convert **bold** and \n to HTML)
  function formatMessage(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  // Show typing indicator
  function showTyping() {
    const messagesContainer = document.getElementById('chat-messages');
    const typingHTML = `
      <div class="message bot typing-message">
        <div class="typing-indicator">
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
          <div class="typing-dot"></div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Hide typing indicator
  function hideTyping() {
    const typing = document.querySelector('.typing-message');
    if (typing) typing.remove();
  }

  // Get bot response
  function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    // Check each response for keyword matches
    for (const response of config.responses) {
      for (const keyword of response.keywords) {
        if (lowerMessage.includes(keyword.toLowerCase())) {
          return response.answer;
        }
      }
    }

    return config.fallback;
  }

  // Handle user message
  function handleUserMessage(text) {
    if (!text.trim()) return;

    // Add user message
    addMessage(text, 'user');

    // Hide quick replies after first message
    document.getElementById('quick-replies').innerHTML = '';

    // Show typing
    showTyping();

    // Get response after delay
    setTimeout(() => {
      hideTyping();
      const response = getBotResponse(text);
      addMessage(response, 'bot');
    }, 800);

    // Clear input
    document.getElementById('chat-input').value = '';
  }

  // Show quick replies
  function showQuickReplies() {
    const quickRepliesContainer = document.getElementById('quick-replies');
    quickRepliesContainer.innerHTML = config.quickReplies
      .map(reply => `
        <button class="quick-reply-btn" data-reply="${reply}">
          ${reply}
        </button>
      `)
      .join('');

    // Add click handlers
    document.querySelectorAll('.quick-reply-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleUserMessage(btn.dataset.reply);
      });
    });
  }

  // Toggle chat window
  function toggleChat() {
    isOpen = !isOpen;
    const chatWindow = document.getElementById('chat-window');
    const chatBubble = document.getElementById('chat-bubble');
    const chatBubbleIcon = document.getElementById('chat-bubble-icon');

    if (isOpen) {
      chatWindow.classList.add('open');
      chatBubbleIcon.textContent = '✕';

      // Add greeting if first time opening
      if (messages.length === 0) {
        addMessage(config.greeting, 'bot');
        showQuickReplies();
      }
    } else {
      chatWindow.classList.remove('open');
      chatBubbleIcon.textContent = config.botEmoji;
    }
  }

  // Initialize
  function init() {
    createWidget();

    // Event listeners
    document.getElementById('chat-bubble').addEventListener('click', toggleChat);
    document.getElementById('chat-close').addEventListener('click', toggleChat);

    document.getElementById('chat-send').addEventListener('click', () => {
      const input = document.getElementById('chat-input');
      handleUserMessage(input.value);
    });

    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleUserMessage(e.target.value);
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
